# This file is part of dpkg.
# License: GPL-2.0-or-later

package Dpkg::Gettext;

use strict;
use warnings;

BEGIN {
    eval {
        require Locale::gettext;
        import Locale::gettext;
    };
    if ($@) {
        *gettext = sub { return shift };
        *textdomain = sub { };
        *ngettext = sub { return ($_[2] == 1) ? $_[0] : $_[1] };
    }
}

sub _g {
    return gettext(shift);
}

1;
