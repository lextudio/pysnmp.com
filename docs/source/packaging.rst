.. include:: /includes/_links.rst

.. _packaging-policy:

Policy on OS-specific Packaging for PySNMP and PySMI
=====================================================

This policy was last updated on 2025-07-25.

This policy governs the distribution of PySNMP and PySMI through OS-specific
package managers (e.g., RPM, DEB). We appreciate the community's efforts to
make these libraries more widely available.

To clarify our position:

Official Distribution Channel
-----------------------------

Our official distribution channel is PyPI. All releases of PySNMP and PySMI are
published there and maintained by our team.

No OS-specific Packaging by Project Maintainers
------------------------------------------------

We do not plan to provide or maintain packages for any specific operating
systems or distributions (e.g., RPM for Fedora, DEB for Debian/Ubuntu). Our
focus remains on the Python ecosystem and the PyPI packages, which are used by
the majority of our business users.

Community Packaging Is Welcome
-------------------------------

If Linux distributions or third-party maintainers wish to create and maintain
OS-specific packages for PySNMP or PySMI, they are welcome to do so under the
terms of our license.

Pull Requests for Packaging Support
------------------------------------

If you have proposed changes that make it easier to build or integrate
PySNMP/PySMI into OS-specific package managers, pull requests are welcome.
We will:

- Review such PRs with relatively higher priority.
- Ensure speedy publication of new versions to PyPI once the changes are
  merged.

If technical support or guidance is required, please contact us at
`LeXtudio Inc.`_ to discuss business engagement details.
