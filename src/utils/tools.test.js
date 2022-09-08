import { buildFilters } from './tools'

describe('Utils::tools', () => {
  describe('buildFilters', () => {
    it('-> buildFilters return empty', () => {
      const test = buildFilters([])
      expect(test).toBe('')
    })
    it('-> buildFilters return empty when not send data', () => {
      const test = buildFilters()
      expect(test).toBe('')
    })
    it('-> buildFilters return empty when send null', () => {
      const test = buildFilters(null)
      expect(test).toBe('')
    })
    it('-> buildFilters return empty when send undefined', () => {
      const test = buildFilters(undefined)
      expect(test).toBe('')
    })
    it('-> buildFilters return empty when send filters', () => {
      const test = buildFilters([{ key: 'page', value: 0 }])
      expect(test).toBe('?page=0')
    })
    it('-> buildFilters return empty when send filters', () => {
      const test = buildFilters([{ key: 'page', value: 0 }, { key: 'query', value: 'angular' }])
      expect(test).toBe('?page=0&query=angular')
    })
  })
})
