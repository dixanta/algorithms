
public class LinkedList {
    private Node head;

    public LinkedList(){

    }

    public void addFirst(int value){
        if(head==null){
            head=new Node(value, null);
        }else{
            Node current=new Node(value, head);
            head=current;
        }
    }

    public void addBefore(int currValue,int value){
        if(head==null){
            addFirst(value);
        }else{
            Node current=head;
            if(current.getValue()==currValue){
                head=new Node(value, current);
            }else{
                while(current.getNext()!=null){
                    
                    if(current.getNext().getValue()==currValue){
                        Node node=new Node(value, current.getNext());
                        current.setNext(node);
                        break;
                    }
                    
                    current=current.getNext();
                }
            }
        }
    }
    public void addAfter(int oldValue,int value){
        if(head==null){
            addFirst(value);
        }else{
            Node current=head;
            while(current!=null){
                if(current.getValue()==oldValue){
                    current.setNext(new Node(value, current.getNext()));
                    break;
                }
                current=current.getNext();
            }    
        }
    }

    public void addLast(int value){
        if(head==null){
            addFirst(value);
        }else{
            Node current=head;
            while(current.getNext()!=null){
                current=current.getNext();
            }
            current.setNext(new Node(value, null));

        }
    }

    public void print(){
        Node current=head;
        while(current!=null){
            System.out.println(current.getValue());
            current=current.getNext();
        }
    }
}