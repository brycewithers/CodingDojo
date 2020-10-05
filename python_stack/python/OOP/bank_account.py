class BankAccount:
    def __init__(self, int_rate, balance = 0):
        self.interest = int_rate
        self.account_balance = balance
    
    def deposit(self, amount):
        self.account_balance += amount
        return self
    def withdraw(self, amount):
        self.account_balance -= amount
        return self
    def display_account_info(self):
        print(f"This account has an interest rate of {self.interest} and is worth ${self.account_balance}.")
    def yield_interest(self):
        if self.account_balance < 0:
            print("You are broke! Stop ordering takeout!")
            return
        self.account_balance += self.account_balance * self.interest
        return self
    
checking = BankAccount(0.01, 10000)
savings = BankAccount(0.02, 20000)

checking.deposit(500).deposit(33.50).deposit(200).withdraw(2000).yield_interest().display_account_info()
savings.deposit(1500).deposit(1500).withdraw(1000).withdraw(400).withdraw(1200).withdraw(6000).yield_interest().display_account_info()