class User:
    
    def __init__(self, name, email_address): # now our method has 2 parameters!
        self.name = name			         # and we use the values passed in to set the name attribute
        self.email = email_address		     # and the email attribute
        self.account_balance = 0		     # the account balance is set to $0, so no need for a third parameter

    def make_deposit(self, deposit):
        self.account_balance += deposit
        return self
    def make_withdrawal(self, withdrawal):
        self.account_balance -= withdrawal
        return self
    def display_user_balance(self):
        print(self.name,self.account_balance)

bryce = User("Bryce Withers", "madeUp@something.com")
jamie = User("Jamie Pip", "random@something.com")
nick = User("Nick David", "fake@something.com")    

print(bryce.make_deposit(1500).make_deposit(50).make_deposit(300).make_withdrawal(900).display_user_balance())
print(jamie.make_deposit(10000).make_deposit(2000).make_withdrawal(8000).make_withdrawal(87).display_user_balance())
print(nick.make_deposit(25000).make_withdrawal(7800).make_withdrawal(10000).make_withdrawal(5000).display_user_balance())