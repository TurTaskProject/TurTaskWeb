# Generated by Django 4.2.6 on 2023-11-17 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0013_alter_recurrencetask_recurrence_rule'),
    ]

    operations = [
        migrations.AddField(
            model_name='recurrencetask',
            name='completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='todo',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
