from django.contrib import admin
from users.models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea
from django.db import models

class UserAdminConfig(UserAdmin):
    model = CustomUser

    search_fields = ('email', 'username', 'first_name',)
    list_filter = ('email', 'username', 'first_name', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('email', 'username', 'first_name', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'username', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )

    # Formfield overrides for 'about' field
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')
        }),
    )

admin.site.register(CustomUser, UserAdminConfig)
