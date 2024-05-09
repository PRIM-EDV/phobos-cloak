import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { multiply } from 'mathjs';

const baseMatrix = [
  [-Math.cos(42 * Math.PI / 180) / 2, Math.cos(-7 * Math.PI / 180), 0],
  [-Math.sin(42 * Math.PI / 180) / 2, Math.sin(-7 * Math.PI / 180), 1]
]

@Component({
  selector: 'ph-bar-chart-3d',
  templateUrl: './ph-bar3d.component.html',
  styleUrl: './ph-bar3d.component.scss'
})
export class PhBar3dComponent implements AfterViewInit {
  @Input() data: any;

  @ViewChild('chart') chart!: ElementRef<SVGElement>;

  ngAfterViewInit(): void {
    console.log(this.chart)
    console.log(this.b([0,0,100]))
    console.log(this.b([0,100,0]))
    console.log(this.b([100,0,0]))

    this.chart.nativeElement.innerHTML = `
    <g transform="translate(60 60)">
    <polygon points="${this.b([0,0,0])} ${this.b([100,0,0])} ${this.b([100,0,100])} ${this.b([0,0,100])}" fill="None"  stroke="black" />
    <polygon points="${this.b([0,0,0])} ${this.b([0,0,100])} ${this.b([0,100,100])} ${this.b([0,100,0])}" fill="None"  stroke="black" />
    </g>`
    }

  b(point: any): string {
    const res = multiply(baseMatrix, point) as any;
    console.log(res)

    return `${res[0]}, ${res[1]}`
  }
}
