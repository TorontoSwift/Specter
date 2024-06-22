from django.db import models
from django.contrib.auth.models import User

class Trade(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    symbol = models.CharField(max_length=10)
    entry_price = models.DecimalField(max_digits=10, decimal_places=2)
    exit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    strategy = models.CharField(max_length=50)
    date = models.DateField()

    def calculate_profit_loss(self):
        return (self.exit_price - self.entry_price) * self.quantity
