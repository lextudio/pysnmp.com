
.. _snmplabs.com:

Welcome to PySNMP Documentation
===============================

.. toctree::
   :maxdepth: 2

The PySNMP ecosystem has been around for more than two decades,
and consists of many useful projects.

The projects
------------

The projects are built upon the protocol of `SNMP <https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol>`_
and the language of `Python <https://www.python.org>`_.
You will notice that momentarily!

.. _pysnmp:

* `SNMP library for Python <https://www.pysnmp.com/pysnmp/>`_

   The pysnmp project delivers the fully-functional SNMP engine
   implementation in pure-Python. It support reasonably advanced
   features such as SNMPv3 and IPv6, can deal with MIB files and
   it is fully asynchronous internally.

.. _snmpclitools:

* `Command-line SNMP tools <https://www.pysnmp.com/snmpclitools>`_

   The collection of command-line SNMP tools written in pure-Python
   and tightly aligned with the de-facto standard SNMP tools that come
   with Net-SNMP e.g. snmpget, snmpwalk and many others.

.. _snmpsim:

* `SNMP Agent Simulator <https://www.pysnmp.com/snmpsim>`_

   The SNMP Agent Simulator tool pretends to be a large network of
   SNMP-speaking devices. It aims at helping fellow developers and
   QE people to model the environment their products will work in
   once released out to the world.

.. _snmpfwd:

* `SNMP Proxy Forwarder <https://www.pysnmp.com/snmpfwd>`_

   The alternative acronym for *SNMP* is *Security? Not My Problem!* The
   SNMP Proxy Forwarder tool tries to improve the security and usability
   of the SNMP technology in many ways.

   For example it can shield your totally insecure SNMPv1 device from the
   hostile network by putting this proxy tool in front of it and only
   expose cryptographically sound SNMPv3 to the world.

.. _snmpresponder:

* `SNMP Command Responder <https://www.pysnmp.com/snmpresponder>`_

   The SNMP Command Responder tool is a general purpose, cross-platform,
   extendable and multi-protocol SNMP agent implementation.

   Users can generate Python code stubs from the ASN.1 MIB files, then
   populate these stubs with the code linking MIBs to the actual
   data sources to be managed.

.. _pysmi:

* `SNMP SMI compiler <https://www.pysnmp.com/pysmi/>`_

   With SNMP, the things you can tackle are formally expressed in the
   `SMI <https://en.wikipedia.org/wiki/Structure_of_Management_Information>`_
   language. The SMI compiler can parse those MIB files into Python
   code or JSON documents for further consumption by :ref:`pysnmp <pysnmp>`
   or other automation tools.

* `ASN.1 types and codecs <https://pyasn1.readthedocs.io/>`_

   `ASN.1 <https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One>`_
   is essentially a data serialisation technology on steroids. Many
   Internet, security and telecom protocols let alone data formats rely on
   ASN.1.

   The pyasn1 library deals with ASN.1 data structures in pure Python.

   .. note:: This library is now maintained by `a separate organization on GitHub`_.

Our history
-----------

.. toctree::
   :maxdepth: 2

   /history

Our services
------------

.. toctree::
   :maxdepth: 2

   /snmp-simulation-service

Source code
-----------

Source code of the projects is hosted on `GitHub <https://github.com/lextudio/pysnmp/>`_.
Everyone is welcome to fork, PR or open issues!

License
-------

In essence, everyone is welcome to take, use or modify PySNMP software
for whatever purpose for as long as attribution is retained.

.. toctree::
   :maxdepth: 2

   /license

.. _a separate organization on GitHub: Generic ASN.1 library for Python: https://github.com/pyasn1/pyasn1
