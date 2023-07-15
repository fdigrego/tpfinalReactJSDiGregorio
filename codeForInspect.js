//code to use into dev tools to reach webpage images
//taking from midudev yt video

$$('img').forEach(img => {
  const src = img.src
  const [filename] = src.split('/').reverse()
  const [name] = filename.split('.')

  const a = document.createElement('a')
  a.setAttribute('href', src)
  a.setAttribute('download', name)
  a.click();
});