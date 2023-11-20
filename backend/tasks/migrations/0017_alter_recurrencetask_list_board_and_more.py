# Generated by Django 4.2.6 on 2023-11-19 20:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0001_initial'),
        ('tasks', '0016_alter_recurrencetask_list_board_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recurrencetask',
            name='list_board',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, to='boards.listboard'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='list_board',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, to='boards.listboard'),
        ),
    ]
