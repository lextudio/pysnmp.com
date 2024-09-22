
.. _history:

Project History
===============

Start of PySNMP
---------------

Python was first released by Guido van Rossum in 1991 to the public [1]_. Soon,
it became a popular language used by both programmers and IT administrators,
and more and more features were added via packages. SNMP has been widely used
in networking field, so no doubt the need of a Python SNMP package was real but
there wasn't a dominant package. Python guru Anthony Baxter once wrote the
SNMPY package [2]_ as a thin wrapper over UCD-SNMP (later became NET-SNMP),
when he needs to "manage some small ethernet switches" [3]_. SNMPY stopped in
Mar 2001, after its Alpha 4 release. Projects similar to SNMPY remain, such as
Easy SNMP.

However, due to the fact that SNMPY tightly binds to native (C based) binaries,
Python developers found it unpleasant in many cases (such as non-blocking I/O),
and Ilya Etingof developed his own SNMP module and later announced on Python
mailing list [4]_ on Oct 13, 1999, which was named Python SNMP module (and
PySNMP for short).

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

Full SNMP v3 support first arrived in the stable release of 4.2.1 after a
7-year adventure. PySMI integration was released in 4.3.0 [6]_.

The repos were migrated to GitHub in 2016 [7]_.

The last release by Ilya was 4.4.12. The code base started to rot over time,
because

#. Many legacy code existed to keep compatibility with very old Python
   versions like 2.x. That added unnecessary complexity to the project and
   made it hard to maintain and develop new features.
#. The core library was not well covered by simple unit test cases. So when
   certain features were added or patched, and listed in release notes, not
   enough information is available on why the changes were needed. And even
   if we wanted to clean up or refactor the code, we couldn't do it easily
   without breaking the existing functionality. Later we found out that
   more test cases were on unstable branches, but they were more like
   end-to-end tests rather than unit tests and you couldn't run them easily
   with debuggers.

Ilya left bits for the 4.4.13 release, as well as his planned 5.0 release.

Forks in Transition
-------------------

Ilya suddenly became silent in 2020 and disappeared from GitHub [8]_, so a few
forks of his repos started to emerge. The lost of snmplabs.com domain was a
sign and indicated the possible falling-apart of the ecosystem.

The previous sponsor of Ilya, inexio GmbH, owns a few forks around snmpsim for
its own products. They fixed several issues in PySNMP and snmpsim.

Since Splunk has certain features that depend on PySNMP, the Splunk team forked
a few Ilya's repos (mostly around pysnmp) and attempted to maintain them. They
cherry picked many community patches and also fixed a few themselves.
Noticeably, they shipped their 5.0 releases on PyPI under a different package
name, which must be distinguished from Ilya's planned 5.0 releases:

* The build system was migrated to poetry, which is a modern Python
  packaging tool that simplifies the process of packaging and distributing
  Python packages. Testing the bits on Python 3.8-3.12 couldn't be easier.
* Legacy code for Python 2.x was removed, while many changes required by
  newer Python versions (3.8 to 3.11) was applied.
* Some patches created by the community between 2019 and 2022 were merged
  into the code base.
* Testing started to become a top priority, but mainly through integration
  tests with Splunk components.
* The API surface was kept compatible with the 4.x releases in most cases.

The Splunk releases were derived from 4.4.12 release branch.

Ilya passed away in Aug 2022, and some of Ilya's colleagues took over the ASN.1
related Python packages [9]_ but shipped two versions for its 0.5 release. But
no one was focusing on the entire ecosystem.

New Chapter with LeXtudio
-------------------------

LeXtudio Inc. announced their own plan to revive the ecosystem on GitHub [10]_
in 2022, and started to invest in the ecosystem.

They were able to continue Splunk team's work and shipped the initial packages,
also as 5.0 releases. Throughout the year of 2023, they steadily picked up
momentum and delivered more work on improving individual packages.

Next, they started to introduce big changes to bring the ecosystem towards the
latest Python standards and best practices [11]_.

* The main theme of version 6.0 was to remove all legacy bits around asyncore.
* The main theme of version 6.1 was to support of latest PySMI releases. We
  cherry picked Ilya's 4.4.13 changes and merged them into the 6.1 release.
* The main theme of version 6.2 was to remove all sync API.
* The main theme of version 7.0 was to meet PEP 8 requirements.
  We cherry picked Ilya's 5.0 changes and merged them into the 7.0 release.
* The main theme of version 7.1 was to adapt async DNS queries and fix the mess
  around nextCmd/bulkCmd/walkCmd/bulkWalkCmd.

While many Ilya's changes were validated and shipped in new releases, some
were not well tested or poorly designed and not really working as expected. For
example, the revised MIB implementation used hard-to-understand callbacks
everywhere and deep recursion, which might work with simple operations but
failed with real-world scenarios due to the recursion depth.

An article with more backgrounds can be found on the LeXtudio blog [12]_.

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
.. [11] https://github.com/lextudio/pysnmp/blob/main/SECURITY.md
.. [12] https://docs.lextudio.com/blog/reviving-pysnmp/

Related Resources
-----------------

- :doc:`/support`
- `PySNMP Quick Start <https://www.pysnmp.com/pysnmp/quick-start>`_
- :doc:`/license`
