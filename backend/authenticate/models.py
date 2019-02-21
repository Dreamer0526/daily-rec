from django.db import models


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=100, unique=True)

    def as_dict(self):
        return {
          'user_id': self.user_id,
          'user_name': self.user_name,
          'password': self.password,
          'email': self.email
        }

    def __str__(self):
        return 'User name: ' + self.user_name