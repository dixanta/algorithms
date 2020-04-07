public class App {
    public static void main(String[] args){
        LinkedList list=new LinkedList();
        list.addFirst(4);
        list.addLast(5);
        list.addLast(10);
        list.addAfter(10, 12);
        list.addAfter(12, 14);
        list.addLast(15);
        list.addFirst(3);
        list.addAfter(15, 25);
        list.addBefore(10, 8);
        list.addBefore(8, 7);
        list.addBefore(10, 9);
        list.addBefore(3, 2);
        list.addBefore(2, 1);
        list.print();
    }
}