import os
res=os.listdir()
for i in res:
    if i.endswith(".wav"):
        x="ffmpeg -i \"%s\" \"%s\""%(i,i.replace(".wav",".mp3"))
        os.system(x)