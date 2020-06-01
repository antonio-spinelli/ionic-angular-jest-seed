import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { configureTests, createSpyObj } from '@tests/test-config.helper'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  const platformStub = {
    ready: (): Promise<string> => Promise.resolve('ready'),
    platforms: (): string[] => ['mobile'],
    is: (): boolean => true,
  }

  beforeEach(async(() => {
    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          { provide: StatusBar, useValue: createSpyObj<StatusBar>(['styleDefault']) },
          { provide: SplashScreen, useValue: createSpyObj<SplashScreen>(['hide']) },
          { provide: Platform, useValue: createSpyObj<Platform>(platformStub) },
        ],
      })
    }).then((testBed) => {
      fixture = testBed.createComponent(AppComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })
  }))

  afterEach(() => {
    fixture?.destroy()
    component = null
  })

  it('should create the app', () => {
    expect(fixture).toBeTruthy()
    expect(component).toBeTruthy()
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it('should initialize the app', async () => {
    const platform = TestBed.inject(Platform)
    expect(platform.ready).toHaveBeenCalled()
    await platform.ready()
    const statusBar = TestBed.inject(StatusBar)
    expect(statusBar.styleDefault).toHaveBeenCalled()
    const splashScreen = TestBed.inject(SplashScreen)
    expect(splashScreen.hide).toHaveBeenCalled()
  })

  // TODO: add more tests!
})
