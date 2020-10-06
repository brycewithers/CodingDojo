import java.util.Random;

public class BankAccount {
	public static int numAccounts = 0;
	public static double totalAssets = 0;
	private static String generateId() {
		String s = "";
		Random r = new Random();
		for (int i = 0; i < 10; i++) {
			s += r.nextInt(10);
		}
		return s;
	}
	
	private String accountNumber;
	private double checkingBalance;
	private double savingsBalance;
	
	public BankAccount() {
		BankAccount.numAccounts++;
		this.checkingBalance = 0;
		this.savingsBalance = 0;
		this.accountNumber = BankAccount.generateId();
	}
	
	public double getCheckingAccountBallance() {
		return this.checkingBalance;
	}
	
	public double getSavingsAccountBallance() {
		return this.savingsBalance;
	}
	
	public void depositAmount(double amount, String account) {
		if (account.equals("savings")) {
			this.savingsBalance += amount;
		} else if (account.equals("checking")) {
			this.checkingBalance += amount;
		}
		BankAccount.totalAssets += amount;
	}
	
	public void withdrawAmount(double amount, String account) {
		boolean successful = false;
		if (account.equals("savings")) {
			if (this.savingsBalance - amount >= 0) {
				successful = true;
				this.savingsBalance -= amount;
			}
		} else if (account.equals("checking")) {
			if(this.checkingBalance - amount >= 0) {
				successful = true;
				this.checkingBalance -= amount;
			}
		}
		if(successful) {
			BankAccount.totalAssets -= amount;
		}
	}
	
	public void displayAccountBalance() {
		System.out.println(String.format("Savings: %.2f, Checking: %.2f", this.savingsBalance, this.checkingBalance));
	}
}
