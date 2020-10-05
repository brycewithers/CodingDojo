public class ProjectTest {
    public static void main(String[] args) {
        Project newProject1 = new Project();
        Project newProject2 = new Project("My name is Two");
        Project newProject3 = new Project("My name is Three", "I came after Two");
        Project newProject4 = new Project("my name is Four", 100, "I'm fancy and cost money!");
    }
}