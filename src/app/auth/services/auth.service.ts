import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const MAPTOOL_SERVER_HOSTNAME = window?.__env?.maptoolServerHostname != null ? `${window.__env.maptoolServerHostname}` : window.location.hostname;
const MAPTOOL_SERVER_PORT = window?.__env?.maptoolServerPort != null ? window.__env.maptoolServerPort : window.location.port;

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  private token: string = "";

  constructor(private readonly http: HttpClient) {

  }

  public async requestJwt(username: string, password: string): Promise<string>
  {
    const data = {username: username, password: password};
    const route = `${window.location.protocol}//${MAPTOOL_SERVER_HOSTNAME}:${MAPTOOL_SERVER_PORT}/api/auth/login`;

    return new Promise<string>((resolve, reject) => {
      this.http.post<{access_token: string}>(route, data).subscribe({
        next: (res) => {
          console.log(res);
          this.token = res.access_token;
          resolve(res.access_token);
        },
        error: (err) => {
          reject(err);
        }
      })
    });
  }

  public isAuthenticated(): boolean {
    return this.token != '';
  }
}
