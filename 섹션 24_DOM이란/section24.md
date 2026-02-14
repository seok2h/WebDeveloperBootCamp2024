# DOM이란?
## getElementById
일치하는 id를 가진 요소를 찾는다.
```JavaScript
// ./Selecting/index.html 기준.
const banner = document.getElementById('banner')
banner
>>> <img id="banner" src="https://images.unsplash.com/photo-1563281577-a...">

const toc = document.getelementById('toc')
toc
>>> <div id="toc" role='navigation" ...>
```

console.dir(요소) 명령어로 객체의 콘텐츠를 볼 수 있다.
```JavaScript
console.dir(toc)
>>> div#toc
    accessKey: ""
    ...
    id: "toc"
    ...
    tagName: "DIV"
    ...
    childElementCount: 3 // 요소의 자식 개수
    ...
```