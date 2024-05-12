import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { multiply } from 'mathjs';
import { Bar3D } from './core/bar3d';


@Component({
  selector: 'ph-bar-chart-3d',
  templateUrl: './ph-bar3d.component.html',
  styleUrl: './ph-bar3d.component.scss'
})
export class PhBar3dComponent implements AfterViewInit {
  @Input() data: any

  @ViewChild('chart') chart!: ElementRef<SVGElement>;

  ngAfterViewInit(): void {
    // this.render(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'].isFirstChange()) {
      this.render(this.data);
    } else {
      this.render(this.data, changes['data'].previousValue);
    }
  }

  public render(data: any, previousData?: any) {
    const size = 50;
    const gap = 20;
    let innerHTML = '<g transform="translate(60 400)">';

    for (let i = data.length - 1; i >= 0; i--) {
      for (let j = data[i].length - 1; j >= 0; j--) {
        if (previousData) {
          const faces = Bar3D.getFaces({x: size * i + gap * i, y: size * j + gap * j, size: size, height: data[i][j]})
          const previousFaces = Bar3D.getFaces({x: size * i + gap * i, y: size * j + gap * j, size: size, height: previousData[i][j]})
          for (const [face, previousFace] of faces.map((face, index) => [face, previousFaces[index]])) {
            innerHTML += `<polygon points="${previousFace}" fill="red"  stroke="black" class="frame">
            <animate attributeName="points" dur="1s" fill="remove"
              to="${face}"
              from="${previousFace}"/>
            </polygon>`;
          }
        } else {
          for (const face of Bar3D.getFaces({x: size * i + gap * i, y: size * j + gap * j, size: size, height: data[i][j]})) {
            innerHTML += `<polygon points="${face}" fill="red"  stroke="black" class="frame" />`;
          }
        }
      }
    }
    try {
      this.chart.nativeElement.innerHTML = innerHTML + '</g>';
      // Wait for next event cycle to start the animation
      setTimeout(() => {
        for (const animation of this.chart.nativeElement.getElementsByTagName('animate')) {
          animation.beginElement();
          animation.setAttribute('fill', 'freeze');
        }
      }, 1);                                    
    } catch (e) {
      console.error(e);
    }
  }

  
}
