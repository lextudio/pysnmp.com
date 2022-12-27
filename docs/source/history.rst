
.. _history:

Project History
===============

Start of PySNMP
---------------
Python was first released by Guido van Rossum in 1991 to the public [1]_. Soon,
it became a popular language used by both programmers and IT administrators, and
more and more features were added via packages. SNMP has been widely used in
networking field, so no doubt the need of a Python SNMP package was real but
there wasn't a dominant package. Python guru Anthony Baxter once wrote the SNMPY
package [2]_ as a thin wrapper over UCD-SNMP (later became NET-SNMP), when he
needs to "manage some small ethernet switches" [3]_. SNMPY stopped in Mar 2001,
after its Alpha 4 release. Projects similar to SNMPY remain, such as Easy SNMP.

However, due to the fact that SNMPY tightly binds to native (C based) binaries,
Python developers found it unpleasant in many cases (such as non-blocking I/O),
and Ilya Etingof developed his own SNMP module and later announced on Python
mailing list [4]_ on Oct 13, 1999, which was named Python SNMP module (and PySNMP
for short).

Releases by Ilya
----------------
When initially announced, PySNMP was just "a simple (and incomplete) SNMP V1
manager class". But in just a few months with assistance from the Python
community it received a lot of improvements and sponsorship by a PSF grant. The
first noticeable rewrite was done in 1.4.1, and since 1.5.1 this Python
officially became a Python package (so the project full name changed to Python
SNMP library).

Release 2.0.1 was the second rewrite to achieve a more object oriented API. It
also added SNMP v2c support. Release 3.0.0 was another major rewrite which
"aimed at a more accurate, standards compliant and extensible ASN.1 and SNMP
protocol objects implementation."

All the changes before 4.x releases were documented in the CHANGES file which
can be found in 3.x TARs on SourceForge [5]_.

Full SNMP v3 support first arrived in the stable release of 4.2.1 after a 7-year
adventure. PySMI integration was released in 4.3.0 [6]_.

The repos were migrated to GitHub in 2016 [7]_.

Multiple Forks
--------------
Ilya suddenly became silent in 2020 and disappeared from GitHub [8]_, so a few
forks of his repos started to emerge. The lost of snmplabs.com domain amplified
the possible falling-apart of the ecosystem, but neither Splunk (a user of
PySNMP) nor inexio GmbH (a previous sponsor) planned to fully take over the
responsibilities.

Ilya passed away in Aug 2022, and some of Ilya's colleagues took over the ASN.1
related Python packages [9]_ but no significant changes were introduced.

LeXtudio Inc. announced its own plan to revive the ecosystem on GitHub [10]_.

.. rubric:: Footnotes

.. [1] https://en.wikipedia.org/wiki/Python_(programming_language)
.. [2] https://sourceforge.net/projects/snmpy/
.. [3] https://www.slideshare.net/knappt/pythonic-apis-anthony-baxter
.. [4] https://groups.google.com/g/comp.lang.python/c/EC8RyKQmEDQ/m/Y37waXJEfWMJ
.. [5] https://sourceforge.net/projects/pysnmp/files/pysnmp/obsolete/
.. [6] https://www.pysnmp.com/pysnmp/changelog
.. [7] https://github.com/etingof?tab=overview&from=2016-02-01&to=2016-02-29
.. [8] https://github.com/etingof?tab=overview&from=2020-12-01&to=2020-12-31
.. [9] https://github.com/pyasn1
.. [10] https://github.com/etingof/pysnmp/issues/429
