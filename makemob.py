def makefile():
    fn=input("enter file name ")
    title=input("enter title ")
    desc=input("enter Descriptions ").strip()
    img="\\rcs\\img\\"+input("enter img name ")+".jpg"
    pri=input("enter price ")
    with open ('E:\\git_repos\\jade-demo\\public\\mob_services\\'+fn+'.html','a') as f:
        data='''
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/css/mob_style.css">
            <link rel="shortcut icon" href="/rcs/thumb.png">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Services || '''+title+'''</title>
        </head>
        <body>
            <img class="arrow" src="/rcs/arrow.svg" onclick="gohome()">
            <img src="'''+img+'''" alt="" class="head">
            <div class="abt-cont">
                <div class="abt-txt">
                    <h1 class="abt-hdr">'''+ title+ '''</h1>
                    <p class="abt-desc">'''+desc+'''</p>
                        <div class="abt-btn-cont">
                            <button class="btn price">From &#8377;'''+pri+'''</button>
                            <button class="btn abt-btn" onclick="sendmsg()">Book Now</button>
                        </div>        
                    </div>
                    <div class="hem">
                        <h3 class="paci hdr1">Happy events</h3>
                        <h1 class="paci hdr2">managements</h1>
                    </div>
            </div>
        </body>
        </html>'''
        f.write(data)
if __name__ == "__main__":
    while(True):
        makefile()