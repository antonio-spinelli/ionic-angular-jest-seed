import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture } from '@angular/core/testing'

import { configureTests } from '@tests/test-config.helper'
import { TabsPage } from './tabs.page'

describe('TabsPage', () => {
  let component: TabsPage
  let fixture: ComponentFixture<TabsPage>

  beforeEach(async(() => {
    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [TabsPage],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
    }).then((testBed) => {
      fixture = testBed.createComponent(TabsPage)
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
