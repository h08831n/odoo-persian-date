# -*- coding: utf-8 -*-
{
    'name': "Persian Date",

    'summary': """Convert gregorian date to jalali""",

    'description': """
        This module converts all the date fields in Odoo into jalali date
    """,

    'author': "hossein naghneh",
    'website': "https://github.com/h08831n",
    "application": True,
    'category': 'persian',
    'version': '0.1',

     'depends' : ['web', 'sale'],
    'data': [
        'views/sale_order.xml'
    ],
    'installable': True,
    'application': False,
    'assets': {
        'web.assets_backend': [
            'persian_date/static/lib/**/*',
            'persian_date/static/src/components/shamsi/**/*',
        ],
    },
}



