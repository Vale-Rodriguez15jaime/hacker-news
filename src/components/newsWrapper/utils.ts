import angular from '../../assets/angular.png'
import reactjs from '../../assets/react.png'
import vue from '../../assets/vue.png'
export const options = [
    {
        label: 'All',
        value: 0
    },
    {
        label: 'My faves',
        value: 1
    }
]

export const optionsSelector = [
    {
        value: 'angular', label: 'Angular', flag: angular
    },
    {
        value: 'reacts', label: 'Reactjs', flag: reactjs
    },
    {
        value: 'vuejs', label: 'Vuejs', flag: vue
    }
]

export const searchId = (id: number, list: any[]) => {
    if (list) return list.find((i: string) => i === id.toString())
}