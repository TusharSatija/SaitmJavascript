function download(url)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("file is start downloading.....")
            const img=url.split('/').pop();
            console.log("file is downloaded successfully",img);
            res(img);
        },2000);
    })
}

function compress(img)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("file is start compressing");
            const zipfile=img.split('.')[0]+".Zip";
            console.log("file is compressed successfully",zipfile);
            res(zipfile);
        },3000);
    })
}
function upload(zipfile)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("file is start uploading .....")
            const upl="https://LocalStorage"+zipfile;
            console.log("file uploaded Successfully"+upl);
            res(upl);
        },1000);
    })

}

download("https://www.facebook.com/profile.jpg")
.then(compress)
.then(upload)
.then((upl)=>{
    console.log(upl);
})
