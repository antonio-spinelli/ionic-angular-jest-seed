import { async, ComponentFixture } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'

import { configureTests } from '@tests/test-config.helper'
import { Tab3Page } from './tab3.page'

describe('Tab3Page', () => {
  let component: Tab3Page
  let fixture: ComponentFixture<Tab3Page>

  beforeEach(async(() => {
    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [Tab3Page],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
      })
    }).then((testBed) => {
      fixture = testBed.createComponent(Tab3Page)
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
