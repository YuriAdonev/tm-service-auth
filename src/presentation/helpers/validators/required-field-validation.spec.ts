import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('Required Field Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should return null if validation success', () => {
    const sut = new RequiredFieldValidation('name')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toBeFalsy()
  })
})
