import { async, ComponentFixture } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'

import { configureTests } from '@tests/test-config.helper'
import { Tab1Page } from './tab1.page'

describe('Tab3Page', () => {
  let component: Tab1Page
  let fixture: ComponentFixture<Tab1Page>

  beforeEach(async(() => {
    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [Tab1Page],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
      })
    }).then((testBed) => {
      fixture = testBed.createComponent(Tab1Page)
      component = fixture.componentInstance
      fixture.detectChanges()
    })
  }))

  afterEach(() => {
    fixture?.destroy()
    component = null
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
