---
published: true
title: Test driven development utilities
description: In computer programming, unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use.
layout: post
tags: [Programming, Code, Best Pratices]
categories: [Development]
---

*Utilities for Test Driven Development*

In computer programming, unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use. <!--more-->


# Unit Testing Frameworks

## Java

Junit : JUnit is a simple framework to write repeatable tests. It is an instance of the xUnit architecture for unit testing frameworks.[http://junit.org/junit4/](http://junit.org/junit4/) and [https://github.com/junit-team/junit4/wiki](https://github.com/junit-team/junit4/wiki)

## .NET

NUnit : NUnit is a unit-testing framework for all .Net languages. Initially ported from JUnit, the current production release, version 3.0, has been completely rewritten with many new features and support for a wide range of .NET platforms. [http://www.nunit.org/](http://www.nunit.org/)

## Visual C# and Visual C++

Unit Test : Unit tests give developers and testers a quick way to look for logic errors in the methods of classes in Visual C#, Visual Basic, and Visual C++ projects. [https://msdn.microsoft.com/en-us/library/dd264975.aspx](https://msdn.microsoft.com/en-us/library/dd264975.aspx)
## Python

Unit testing framework : The unittest unit testing framework was originally inspired by JUnit and has a similar flavor as major unit testing frameworks in other languages. It supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from the reporting framework. [https://docs.python.org/3.3/library/unittest.html](https://docs.python.org/3.3/library/unittest.html)

## Ruby

Minitest : minitest provides a complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking. "I had a class with Jim Weirich on testing last week and we were allowed to choose our testing frameworks. Kirk Haines and I were paired up and we cracked open the code for a few test frameworks... [https://www.ruby-toolbox.com/categories/testing_frameworks](https://www.ruby-toolbox.com/categories/testing_frameworks)

### More informations

[https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks)

# Test coverage

## EMMA Coverage report

EMMA is an open-source toolkit for measuring and reporting Java code coverage. EMMA distinguishes itself from other tools by going after a unique feature combination: support for large-scale enterprise software development while keeping individual developer's work fast and iterative. Every developer on your team can now get code coverage for free and they can get it fast! [http://emma.sourceforge.net/](http://emma.sourceforge.net/)
ECLEMMA : Plugin for Eclipse

EclEmma is a free Java code coverage tool for Eclipse, available under the Eclipse Public License. It brings code coverage analysis directly into the Eclipse workbench:

- Fast develop/test cycle: Launches from within the workbench like JUnit test runs can directly be analyzed for code coverage.
- Rich coverage analysis: Coverage results are immediately summarized and highlighted in the Java source code editors.
- Non-invasive: EclEmma does not require modifying your projects or performing any other setup.

## Clover (Atlassian, commercial tool)

Balance writing code that does stuff, and code that tests stuff. Find risky code changes before you commit them to your SCM system. Use Clover in your IDE or continuous integration system. [https://www.atlassian.com/software/clover](https://www.atlassian.com/software/clover)

## Code Coverage (.NET, Microsoft)

To determine what proportion of your project's code is actually being tested by coded tests such as unit tests, you can use the code coverage feature of Visual Studio. To guard effectively against bugs, your tests should exercise or 'cover' a large proportion of your code. [https://msdn.microsoft.com/en-us/library/dd537628.aspx](https://msdn.microsoft.com/en-us/library/dd537628.aspx)

## dotCOVER (JETBRAINS)

JetBrains dotCover is a .NET unit test runner and code coverage tool that integrates with Visual Studio. [http://www.jetbrains.com/dotcover/](http://www.jetbrains.com/dotcover/)

## NCOVER (.NET)

Individual Developers, Software Development Companies and The World's Largest In-House Development Teams Depend on NCover. NCover Is The World's Leading .NET Code Coverage Solution. [http://www.ncover.com/](http://www.ncover.com/)

## COVERAGE (PYTHON)

*Code coverage measurement for Python*

Code coverage testing for Python. Coverage.py measures code coverage, typically during test execution. It uses the code analysis tools and tracing hooks provided in the Python standard library to determine which lines are executable, and which have been executed. [https://pypi.python.org/pypi/coverage](https://pypi.python.org/pypi/coverage).


# What to avoid while testing your code ?

Unit test should not :

- Interact with a database or file system ;
- Require non-trivial network communication (you're not testing the network) ;
- Require any environment changes to run ;
- Call complex collaborator objects ;

# Unit test != other tests
