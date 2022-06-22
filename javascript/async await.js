function resolve2Second(){
    return new Promise(resolve=>{
        setTimeout(()=> {
            resolve(`Loading...`)
        }, 3000)
    });
}
function resolve3Second(){
    return new Promise(resolve=>{
        setTimeout(()=> {
            resolve(`Loading..`)
        }, 4000)
    });
}
function resolve4Second(){
    return new Promise(resolve=>{
        setTimeout(()=> {
            resolve(`Loading.`)
        }, 4000)
    });
}
function resolve5Second(){
    return new Promise(resolve=>{
        setTimeout(()=> {
            resolve(`Selesai`)
        }, 4000)
    });
}


async function asyncCall(){
    console.log(`Loading..`);
    const result = await resolve2Second();
    console.log(result);
    const loading = await resolve3Second();
    console.log(loading);
    const loadings = await resolve4Second();
    console.log(loadings);
    const selesai = await resolve5Second();
    console.log(selesai);
}


asyncCall();