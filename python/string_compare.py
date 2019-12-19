#
# String Compare Algorithm
# Written By: Dixanta Bahadur Shrestha
# Creators Institute of Business & Technology
#
def compare(text,pattern):
    text=text.lower()
    pattern=pattern.lower()
    tlen=len(text)
    plen=len(pattern)

    i=0

    if(tlen==plen):
        if(text[i]==pattern[i] and text[plen-1]==pattern[plen-1]):
            for x in range(1,plen-1):
                if(text[x]!=pattern[x]):
                    return False
            return True
    
    return False

if __name__=="__main__":
    text=input("Enter Text:")

    pattern=input("Enter pattern:")

    print(compare(text,pattern))
