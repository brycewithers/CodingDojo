
public class BankAccountTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BankAccount b1 = new BankAccount();
		b1.depositAmount(50.50, "checking");
		b1.depositAmount(1000.00, "savings");
		b1.displayAccountBalance();

		System.out.println(BankAccount.totalAssets);

		b1.withdrawAmount(250.99, "checking");
		b1.withdrawAmount(12.99, "savings");
		b1.displayAccountBalance();

		System.out.println(BankAccount.totalAssets);
	}

}
