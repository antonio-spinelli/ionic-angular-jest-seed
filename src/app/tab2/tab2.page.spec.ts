import { async, ComponentFixture } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'

import { configureTests } from '@tests/test-config.helper'
import { Tab2Page } from './tab2.page'

describe('Tab3Page', () => {
  let component: Tab2Page
  let fixture: ComponentFixture<Tab2Page>

  beforeEach(async(() => {
    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [Tab2Page],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
      })
    }).then((testBed) => {
      fixture = testBed.createComponent(Tab2Page)
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
