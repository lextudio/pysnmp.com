.. include:: /includes/_links.rst

.. _pysnmp.com:

Welcome to PySNMP 7 Homepage
============================

.. toctree::
   :maxdepth: 2

Welcome to the new homepage for PySNMP, a comprehensive SNMP ecosystem for
Python that has been empowering developers and network administrators to build
SNMP-based applications for over two decades. This site introduces PySNMP key
features, sibling projects, and support options to help you make the most of
SNMP in `Python`_.

SNMP Knowledge
--------------

Simple Network Management Protocol (SNMP) is an essential protocol for managing
and monitoring network devices. PySNMP leverages SNMP with the power and
simplicity of Python, providing a versatile SNMP engine for a wide range of
applications.

.. toctree::
   :maxdepth: 2

   snmp-history
   snmp-design

You can interact with `SNMP Guru GPT`_ to ask questions about SNMP and learn
more in-depth information about the protocol.

Core Library
------------

The PySNMP core library implements a robust SNMP engine entirely in Python. It
provides full support for SNMPv1, SNMPv2c, and SNMPv3, as well as key features
like MIB handling and asynchronous operations.

Key Features:
^^^^^^^^^^^^^

- **Full SNMPv1, v2c, and v3 Support**: Includes advanced features such as
  User-based Security Model (USM) and View-based Access Control Model (VACM).
- **IPv6 Support**: Fully supports managing IPv6 devices.
- **Asynchronous Operation**: Designed to handle large networks efficiently
  through asynchronous operations.
- **MIB Handling**: PySNMP can compile MIBs into Python modules for easy access
  to named OIDs.
- **Extensible Architecture**: Easily extend PySNMP with custom functionality
  for your specific use cases.

Getting Started:
^^^^^^^^^^^^^^^^

To begin using PySNMP, visit `SNMP Library Docs <https://www.pysnmp.com/pysnmp/>`_
for comprehensive guides and articles that cover everything from installation to
advanced usage. These resources are designed to help both beginners and
experienced developers quickly get up to speed with PySNMP's capabilities and
best practices.

Additionally, `PySNMP GitHub repository`_ hosts the source code and a variety of
examples to illustrate common use cases and advanced features. By exploring the
repository, you can gain deeper insights into the library's architecture and
contribute to its ongoing development.

Tools and Utilities
-------------------

PySNMP includes a variety of tools and utilities designed to help manage and
monitor SNMP-enabled devices. These sibling projects complement the PySNMP core
library.

- `Command-line SNMP Tools <https://www.pysnmp.com/snmpclitools/>`_: SNMP utilities for the command line.
- `SNMP Simulator`_: Simulate SNMP agents for testing.
- `SNMP Simulator Control Plane <https://www.pysnmp.com/snmpsim-control-plane/>`_: Manage and control SNMP simulation.
- `SNMP Simulator Data <https://www.pysnmp.com/snmpsim-data/>`_: Dataset for use with SNMP simulators.
- `SNMP Proxy Forwarder`_: Forward SNMP messages between networks.
- `SNMP Command Responder <https://www.pysnmp.com/snmpresponder/>`_: Implement SNMP agents.
- `SNMP SMI Compiler <https://www.pysnmp.com/pysmi/>`_: Compile MIB files into Python.
- `ASN.1 Types and Codecs <https://pyasn1.readthedocs.io/>`_: Encode and decode ASN.1 data types.

The Python community has developed a wide range of tools and libraries built on
top of PySNMP. You can explore many of these in the showcase page linked below.

Additional Resources
--------------------

.. toctree::
   :titlesonly:

   support
   license
   history
   snmp-simulation-service
   showcase
   privacy

Contributing
------------

PySNMP is an open-source project, and contributions are welcome. Visit our
`PySNMP GitHub repository`_ to fork, submit PRs, or report issues.

PySNMP is freely available under terms that allow for both personal and
commercial use. Learn more about the PySNMP license in the :doc:`/license`
section.

SNMP with C#/.NET?
------------------

Are you looking for an SNMP library for C#/.NET? Check out C# SNMP product
family from `LeXtudio Inc.`_,

.. toctree::
   :maxdepth: 2

   sharpsnmp
