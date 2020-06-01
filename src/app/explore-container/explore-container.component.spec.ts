import { async, ComponentFixture } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { configureTests } from '@tests/test-config.helper'
import { ExploreContainerComponent } from './explore-container.component'

describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent
  let fixture: ComponentFixture<ExploreContainerComponent>

  beforeEach(async(() => {
    configureTests((testBed) => {
      testBed.configureTestingModule({
        declarations: [ExploreContainerComponent],
        imports: [IonicModule.forRoot()],
      })
    }).then((testBed) => {
      fixture = testBed.createComponent(ExploreContainerComponent)
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
