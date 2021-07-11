const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            var data = action.data
            state = {
                data,
                pages: state.pages.concat([data]),
                editIsOpen : false
            }
            localStorage.setItem('dataKingPower', JSON.stringify(state.pages));
            return state
        case 'VIEW':
            var data = state.pages.filter(datas => datas.id === action.id)
            var pages = state.pages
            state = data[0]
            state.editIsOpen = true
            state.pages = pages
            return state
        case 'EDIT':
            var pages = state.pages.map((datas) => {
                if (datas.id === action.data.id) {
                    return {
                        id: action.data.id,
                        title: action.data.title,
                        firstname: action.data.firstname,
                        lastname: action.data.lastname,
                        birthday: action.data.birthday,
                        nation: action.data.nation,
                        citizenID1: action.data.citizenID1,
                        citizenID2: action.data.citizenID2,
                        citizenID3: action.data.citizenID3,
                        citizenID4: action.data.citizenID4,
                        citizenID5: action.data.citizenID5,
                        gender: action.data.gender,
                        countryCode:action.data.countryCode,
                        phone: action.data.phone,
                        passport: action.data.passport,
                        salary: action.data.salary,
                    }
                } else return datas;
            })

            state = {
                id: "",
                title: "",
                firstname: "",
                lastname: "",
                birthday: "",
                nation: "",
                citizenID1: "",
                citizenID2: "",
                citizenID3: "",
                citizenID4: "",
                citizenID5: "",
                gender: "",
                countryCode:"",
                phone: "",
                passport: "",
                salary: "",
                pages: pages,
                editIsOpen : false
            }

            localStorage.setItem('dataKingPower', JSON.stringify(pages));

            return state
        case 'DELETE':
            var pages = state.pages.filter(datas => datas.id !== action.id)

            state = {
                id: "",
                title: "",
                firstname: "",
                lastname: "",
                birthday: "",
                nation: "",
                citizenID1: "",
                citizenID2: "",
                citizenID3: "",
                citizenID4: "",
                citizenID5: "",
                gender: "",
                phone: "",
                passport: "",
                salary: "",
                pages: pages,
                editIsOpen : false
            }

            localStorage.setItem('dataKingPower', JSON.stringify(pages));
            return state;
        case 'CANCEL':
            var pages = state.pages
            state = {
                id: "",
                title: "",
                firstname: "",
                lastname: "",
                birthday: "",
                nation: "",
                citizenID1: "",
                citizenID2: "",
                citizenID3: "",
                citizenID4: "",
                citizenID5: "",
                gender: "",
                phone: "",
                passport: "",
                salary: "",
                pages: pages,
                editIsOpen : false
            }
            localStorage.setItem('dataKingPower', JSON.stringify(pages));
            return state;
        default:
            var pages = (JSON.parse(localStorage.getItem('dataKingPower')) ? JSON.parse(localStorage.getItem('dataKingPower')) : [])

            state = {
                    id: "",
                    title: "",
                    firstname: "",
                    lastname: "",
                    birthday: "",
                    nation: "",
                    citizenID1: "",
                    citizenID2: "",
                    citizenID3: "",
                    citizenID4: "",
                    citizenID5: "",
                    gender: "Male",
                    phone: "",
                    passport: "",
                    salary: "",
                    pages: pages,
                    editIsOpen : false
                }

            return state;
    }
}

export default postReducer;