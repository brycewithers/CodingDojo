class BankAccount:
    def __init__(self, int_rate, balance = 0):
        self.interest = int_rate
        self.account = balance
    
    def deposit(self, amount):
        self.account += amount
        return self
    def withdraw(self, amount):
        self.account -= amount
        return self
    def display_account_info(self):
        print(f"This account has an interest rate of {self.interest} and is worth ${self.account}.")
    def yield_interest(self):
        if self.account < 0:
            print("You are broke! Stop ordering takeout!")
            return
        self.account += self.account * self.interest
        return self

class User:
    def __init__(self, name, email_address):                 
        self.name = name			                         
        self.email = email_address                          
        self.account = BankAccount(int_rate = 0.02, balance = 0)	  

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
    def display_account_info(self):
        print(f"This account has an interest rate of {self.account.interest} and is worth ${self.account.account}.")

    
bryce = User("Bryce Withers", "madeUp@something.com")
jamie = User("Jamie Pip", "random@something.com")
nick = User("Nick David", "fake@something.com") 

bryce.account.deposit(1000).deposit(4.99).display_account_info()
# print(jamie.account.display_account_info())
bryce.make_deposit(45).display_account_info()