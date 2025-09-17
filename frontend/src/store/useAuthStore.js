import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    authUser: {name: 'Jon', _id: 125, age: 27},
    isLoggedIn: false,
    isLoading: false,

    login: () => {
        console.log('We just logged in')
        set({isLoggedIn: true, isLoading: true});

        
    },
}));
