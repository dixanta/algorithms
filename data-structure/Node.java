
public class Node {
    private int value;
    private Node next;

    public Node(){

    }

    public Node(int value,Node next){
        this.value=value;
        this.next=next;
    }

    /**
     * @return the value
     */
    public int getValue() {
        return value;
    }
    /**
     * @param value the value to set
     */
    public void setValue(int value) {
        this.value = value;
    }

    /**
     * @return the next
     */
    public Node getNext() {
        return next;
    }

    /**
     * @param next the next to set
     */
    public void setNext(Node next) {
        this.next = next;
    }
}