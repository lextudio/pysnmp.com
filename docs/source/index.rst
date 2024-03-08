.. include:: /includes/_links.rst

.. _pysnmp.com:

Welcome to PySNMP 6.0 Homepage
==============================

.. toctree::
   :maxdepth: 2

Welcome to the new homepage for PySNMP. This is a comprehensive SNMP
ecosystem for `Python`_ that has been empowering developers and network
administrators to build SNMP-based applications for over two decades. PySNMP
offers a rich set of libraries/tools enabling SNMPv3 and IPv6 support, MIB file
handling, and asynchronous operations, all implemented in pure Python.

Key Features
------------

Simple Network Management Protocol (SNMP) is an essential method for managing
and monitoring network devices. PySNMP leverages this protocol, combined with
the power and simplicity of Python, to provide a versatile SNMP engine suitable
for a wide range of applications.

- **Full SNMPv1, v2c, and v3 Support**: Including advanced features such as
  user-based security model (USM) and view-based access control model (VACM).
- **IPv6 Ready**: Full support for managing IPv6 devices.
- **Asynchronous Operation**: Built to handle large networks and asynchronous
  operations efficiently.
- **MIB Handling**: Compile MIBs into Python modules for easy access to named
  OIDs.
- **Extensible Architecture**: Easily extend PySNMP with custom functionality
  to fit your specific needs.

Getting Started
---------------

New to PySNMP? Start here to understand the basics and set up your SNMP
environment:

.. toctree::
   :maxdepth: 2

   Introduction to SNMP <https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol>
   SNMP Guru GPT <https://chat.openai.com/g/g-ZWj5VHbh7-snmp-guru>

Core Library
------------

The core PySNMP library implements the SNMP engine in Python. Its source code
is hosted at GitHub `https://github.com/lextudio/pysnmp <https://github.com/lextudio/pysnmp>`_.

.. toctree::
   :maxdepth: 2

   SNMP Library for Python 6.0 <https://www.pysnmp.com/pysnmp/>
   SNMP Library Quick Start <https://www.pysnmp.com/pysnmp/quick-start>

Tools and Utilities
-------------------

A variety of tools and utilities have been developed to help you manage and
monitor your network devices.

.. toctree::
   :maxdepth: 2

   Command-line SNMP Tools <https://www.pysnmp.com/snmpclitools>
   SNMP Agent Simulator <https://www.pysnmp.com/snmpsim>
   SNMP Proxy Forwarder <https://www.pysnmp.com/snmpfwd>
   SNMP Command Responder <https://www.pysnmp.com/snmpresponder>
   SNMP SMI Compiler <https://www.pysnmp.com/pysmi/>
   ASN.1 Types and Codecs <https://pyasn1.readthedocs.io/>

Additional Resources
--------------------

.. toctree::
   :titlesonly:

   /history
   /snmp-simulation-service
   /support
   /license

Contributing
------------

PySNMP is an open-source project, and contributions are welcome. Visit our
`PySNMP GitHub repository`_ to fork, submit PRs, or report issues.

PySNMP is freely available under terms that allow for both personal and
commercial use. Learn more about the PySNMP license in the :doc:`/license`
section.
