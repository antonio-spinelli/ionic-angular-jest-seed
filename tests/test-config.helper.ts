import { TestBed } from '@angular/core/testing'

type CompilerOptions = Partial<{
  providers: any[]
  useJit: boolean
  preserveWhitespaces: boolean
}>
export type ConfigureFn = (testBed: typeof TestBed) => void

export const configureTests = (
  configure: ConfigureFn,
  compilerOptions: CompilerOptions = {},
) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  }

  const configuredTestBed = TestBed.configureCompiler(compilerConfig)

  configure(configuredTestBed)

  return configuredTestBed.compileComponents().then(() => configuredTestBed)
}

export const createSpyObj = <T>(
  methodNames: string[] | { [methodName: string]: any },
): T => {
  const obj: any = {}

  if (methodNames) {
    if (methodNames instanceof Array) {
      methodNames.forEach((methodName) => {
        obj[methodName] = jest.fn()
        obj[methodName] = jest.spyOn(obj, methodName)
      })
    } else {
      for (const key in methodNames) {
        if (methodNames.hasOwnProperty(key)) {
          const value = methodNames[key]
          obj[key] = jest.fn().mockImplementation(value)
          obj[key] = jest.spyOn(obj, key)
        }
      }
    }
  }

  return obj
}
