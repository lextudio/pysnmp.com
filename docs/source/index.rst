
.. _snmplabs.com:

Welcome to PySNMP Documentation
===============================

Welcome to the official documentation for PySNMP, a comprehensive SNMP ecosystem for `Python <https://www.python.org>`_ that has been empowering developers and network administrators to build SNMP-based applications for over two decades. PySNMP offers a rich set of libraries/tools enabling SNMPv3 and IPv6 support, MIB file handling, and asynchronous operations, all implemented in pure Python.

Introduction
------------

Simple Network Management Protocol (SNMP) is an essential method for managing and monitoring network devices. PySNMP leverages this protocol, combined with the power and simplicity of Python, to provide a versatile SNMP engine suitable for a wide range of applications.

Key Features
^^^^^^^^^^^^

- **Full SNMPv1, v2c, and v3 Support**: Including advanced features such as user-based security model (USM) and view-based access control model (VACM).
- **IPv6 Ready**: Full support for managing IPv6 devices.
- **Asynchronous Operation**: Built to handle large networks and asynchronous operations efficiently.
- **MIB Handling**: Compile MIBs into Python modules for easy access to named OIDs.
- **Extensible Architecture**: Easily extend PySNMP with custom functionality to fit your specific needs.

Getting Started
^^^^^^^^^^^^^^^

New to PySNMP? Start here to understand the basics and set up your SNMP environment:

- `Introduction to SNMP <https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol>`_

PySNMP Ecosystem
----------------

PySNMP is more than just an SNMP library. It's part of a larger ecosystem designed to address various SNMP-related tasks:

Core Library
^^^^^^^^^^^^

- `SNMP library for Python <https://www.pysnmp.com/pysnmp/>`_: The core PySNMP library, implementing the SNMP engine in Python.

Tools and Utilities
^^^^^^^^^^^^^^^^^^^

- `Command-line SNMP Tools <https://www.pysnmp.com/snmpclitools>`_: A suite of command-line tools for SNMP operations, compatible with Net-SNMP utilities.
- `SNMP Agent Simulator <https://www.pysnmp.com/snmpsim>`_: Simulate networks of SNMP devices for testing and development purposes.
- `SNMP Proxy Forwarder <https://www.pysnmp.com/snmpfwd>`_: Enhance the security and flexibility of SNMP communications in your network.
- `SNMP Command Responder <https://www.pysnmp.com/snmpresponder>`_: An extendable SNMP agent framework for custom SNMP-based solutions.
- `SNMP SMI Compiler <https://www.pysnmp.com/pysmi/>`_: Convert MIBs into Python modules or JSON documents for use with PySNMP or other tools.
- `ASN.1 Types and Codecs <https://pyasn1.readthedocs.io/>`_: Work with ASN.1 data structures in Python.

Additional Resources
^^^^^^^^^^^^^^^^^^^^

.. toctree::
   :titlesonly:

   /history
   /snmp-simulation-service

Contributing
------------

PySNMP is an open-source project, and contributions are welcome. Visit our `GitHub repository <https://github.com/lextudio/pysnmp/>`_ to fork, submit PRs, or report issues.

License
-------

PySNMP is freely available under terms that allow for both personal and commercial use. Learn more about the PySNMP license in the :doc:`/license`.
