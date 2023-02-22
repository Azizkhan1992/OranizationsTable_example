import router from "@/router";
const TOKEN_KEY = 'Ism';
const REGION_KEY = 'Region';



const TokenService = {
    getToken(){
        return localStorage.getItem(TOKEN_KEY);
    },

    removeToken(){
        localStorage.removeItem(TOKEN_KEY);
        router.push('/first-step')
    },

    saveName(name){
        localStorage.setItem(TOKEN_KEY, name);
        // router.push('/')
    },
    saveRegion(region){
        localStorage.setItem(REGION_KEY, region)
    }
}

export default TokenService;