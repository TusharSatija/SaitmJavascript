function DownloadFile(url,download)
{
    console.log('file start downloading..... ')
    setTimeout(()=>{
        let path=url.split('/').pop();
        download(path);
    },2000);
}

function compressFile(path,compress)
{
    console.log('file start compress');
    setTimeout(()=>{
        const comp=path.split('.')[0]+'.Zip';
        compress(comp);
    },2000);
}

function UploadFile(comp,upload)
{
    console.log('file start uploading ');
    setTimeout(()=>{
        const upl='http://LocalStorage'+comp;
        upload(upl);
    },2000);
}
DownloadFile('https://www.facebook.com/profile.jpg',function(path){
    console.log(`file downloaded successfully ${path}`);
    compressFile(path,function(comp){
        console.log(`file compressed successfully....${comp}`);
            UploadFile(comp,function(upl){
            console.log(`file upload Sucessfully..${upl}`)
                console.log('Everthing is done !!')
        })
    })
})

