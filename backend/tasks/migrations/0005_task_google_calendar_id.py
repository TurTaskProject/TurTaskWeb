# Generated by Django 4.2.6 on 2023-11-02 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_rename_time_reminder_alerttime_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='google_calendar_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]