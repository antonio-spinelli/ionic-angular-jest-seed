import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import {
  Plugins,
  StatusBarStyle,
  SplashScreenPlugin,
  StatusBarPlugin,
} from '@capacitor/core'
import { Platform } from '@ionic/angular'

import { configureTests, createSpyObj } from '@tests/test-config.helper'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let originalSplashScreen: SplashScreenPlugin
  let originalStatusBar: StatusBarPlugin
  const platformStub = {
    ready: (): Promise<string> => Promise.resolve('ready'),
    platforms: (): string[] => ['mobile'],
    is: (): boolean => true,
  }

  beforeEach(async(() => {
    originalSplashScreen = Plugins.SplashScreen
    originalStatusBar = Plugins.StatusBar
    Plugins.StatusBar = createSpyObj<StatusBarPlugin>(['setStyle'])
    Plugins.SplashScreen = createSpyObj<SplashScreenPlugin>(['hide'])

    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
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

    Plugins.StatusBar = originalStatusBar
    Plugins.SplashScreen = originalSplashScreen
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


    expect(Plugins.StatusBar.setStyle).toHaveBeenCalledWith({
      style: StatusBarStyle.Dark,
    })
    expect(Plugins.SplashScreen.hide).toHaveBeenCalled()
  })

  // TODO: add more tests!
})
