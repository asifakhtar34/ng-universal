import { isPlatformServer } from '@angular/common';
import { Component, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { TransferState, makeStateKey, Meta } from '@angular/platform-browser';
const configKey = makeStateKey('CONFIG');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  constructor(
    private metaService: Meta,
    private injector: Injector,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformid: object
  ) {
    this.title = 'demo';
    console.log('Remove me in app component', window);
    if (isPlatformServer(this.platformid)) {
      const envJson = this.injector.get('CONFIG') ? this.injector.get('CONFIG') : {};
      this.state.set(configKey, envJson as any);
    } else {
      console.log(this.state.get(configKey, undefined as any));
    }

    setTimeout(()=>{  this.metaService.updateTag({ property: "og:description", content: "Leadrat Microsite"})
    this.metaService.updateTag({property: 'og:image', content: 'http://leadrat.com/wp-content/uploads/2022/06/Properties.png'})}, 10000)

  }
}
