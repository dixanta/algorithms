
txt=""
for line in open("data.txt",encoding="utf8").readlines():
    txt +=line
pat="search"

def naive(txt,pat):
    txt=txt.lower()
    pat=pat.lower()
    txtLen=len(txt)
    patLen=len(pat)
    counter=0

    for i in range(0,(txtLen+1)-patLen):
        total=0
        for j in range(0,patLen):
            if(txt[i+j]==pat[j]):
                total +=1
        if(total==patLen):
            counter +=1
    return counter

print(naive(txt,pat))
