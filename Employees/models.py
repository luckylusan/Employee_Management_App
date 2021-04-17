from django.db import models
from django.contrib.auth.models import User

class Employee(models.Model):
    sno = models.AutoField(primary_key=True)
    employee_id = models.IntegerField()
    emp_name = models.CharField(max_length=100, blank=False)
    emp_designation = models.CharField(max_length=100, blank=False)
    emp_doj = models.EmailField(max_length=100,unique=True, blank=False)
    owner = models.ForeignKey(
        User, related_name="employees", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'employees'