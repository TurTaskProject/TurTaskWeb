# Generated by Django 4.2.6 on 2023-11-20 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0018_alter_habit_creation_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='habit',
            name='creation_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='recurrencetask',
            name='creation_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='creation_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
